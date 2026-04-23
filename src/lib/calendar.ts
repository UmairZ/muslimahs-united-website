export interface CalendarEvent {
  id: string;
  title: string;
  start: string;
  end?: string;
  location?: string;
  description?: string;
  registrationUrl?: string;
  rsvpRequired?: boolean;
  capacity?: number;
}

function parseDescription(raw: string): {
  description: string;
  registrationUrl?: string;
  rsvpRequired?: boolean;
  capacity?: number;
} {
  const lines = raw.split("\n");
  let registrationUrl: string | undefined;
  let rsvpRequired = false;
  let capacity: number | undefined;
  const descLines: string[] = [];

  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed.startsWith("Registration:")) {
      registrationUrl = trimmed.replace("Registration:", "").trim();
    } else if (trimmed.startsWith("RSVP:") && trimmed.toLowerCase().includes("required")) {
      rsvpRequired = true;
    } else if (trimmed.startsWith("Capacity:")) {
      const num = parseInt(trimmed.replace("Capacity:", "").trim(), 10);
      if (!isNaN(num)) capacity = num;
    } else {
      descLines.push(line);
    }
  }

  return {
    description: descLines.join("\n").trim(),
    registrationUrl,
    rsvpRequired,
    capacity,
  };
}

export async function getUpcomingEvents(maxResults = 10): Promise<CalendarEvent[]> {
  const calendarId = process.env.GOOGLE_CALENDAR_ID;
  const apiKey = process.env.GOOGLE_CALENDAR_API_KEY;

  if (!calendarId || !apiKey) {
    return getMockEvents();
  }

  try {
    const now = new Date().toISOString();
    const url = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(calendarId)}/events?key=${apiKey}&timeMin=${now}&maxResults=${maxResults}&singleEvents=true&orderBy=startTime`;

    const res = await fetch(url, { next: { revalidate: 3600 } });
    if (!res.ok) return getMockEvents();

    const data = await res.json();
    return (data.items || []).map((item: Record<string, unknown>) => {
      const rawDesc = (item.description as string) || "";
      const parsed = parseDescription(rawDesc);
      return {
        id: item.id as string,
        title: item.summary as string,
        start: ((item.start as Record<string, string>)?.dateTime || (item.start as Record<string, string>)?.date) as string,
        end: ((item.end as Record<string, string>)?.dateTime || (item.end as Record<string, string>)?.date) as string | undefined,
        location: item.location as string | undefined,
        ...parsed,
      };
    });
  } catch {
    return getMockEvents();
  }
}

function getMockEvents(): CalendarEvent[] {
  return [];
}
