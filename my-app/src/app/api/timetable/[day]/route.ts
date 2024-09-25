import { NextRequest, NextResponse } from 'next/server';

interface Timetable {
    day: string;
    subject: string;
    time: string; // Keeping time as a string
}

let timetable: Timetable[] = [
    { day: 'Monday', subject: 'Mathematics', time: '9:00 AM - 10:30 AM' },
    { day: 'Monday', subject: 'Physics', time: '10:45 AM - 12:15 PM' },
    { day: 'Tuesday', subject: 'Chemistry', time: '9:00 AM - 10:30 AM' },
    { day: 'Wednesday', subject: 'Biology', time: '10:45 AM - 12:15 PM' }
];

export async function GET(request: NextRequest, { params }: { params: { day: string } }) {
    const { day } = params;

    // Filter timetable for the requested day
    const dayTimetable = timetable.filter(entry => entry.day.toLowerCase() === day.toLowerCase());

    if (dayTimetable.length === 0) {
        return NextResponse.json({ message: 'No timetable found for this day' }, { status: 404 });
    }

    return NextResponse.json(dayTimetable); // Return the filtered timetable
}

export async function PUT(request: NextRequest) {
    const updatedEntry: Timetable = await request.json(); // Get the updated entry from the request body

    // Validate the updated entry
    if (!updatedEntry.day || !updatedEntry.subject || !updatedEntry.time) {
        return NextResponse.json({ message: 'Day, subject, and time are required' }, { status: 400 });
    }

    // Find the index of the existing entry to update
    const index = timetable.findIndex(entry => entry.day.toLowerCase() === updatedEntry.day.toLowerCase());

    if (index === -1) {
        return NextResponse.json({ message: 'Timetable entry not found' }, { status: 404 });
    }

    // Update the existing entry
    timetable[index] = updatedEntry;

    return NextResponse.json({ message: 'Entry updated successfully', timetable }, { status: 200 });
}


export async function DELETE(request: NextRequest) {
    const { day } = await request.json(); // Get the day from the request body

    // Validate the day parameter
    if (!day) {
        return NextResponse.json({ message: 'Day is required' }, { status: 400 });
    }

    // Find the index of the existing entry to delete
    const index = timetable.findIndex(entry => entry.day.toLowerCase() === day.toLowerCase());

    if (index === -1) {
        return NextResponse.json({ message: 'Timetable entry not found' }, { status: 404 });
    }

    // Remove the entry from the timetable
    timetable.splice(index, 1);}