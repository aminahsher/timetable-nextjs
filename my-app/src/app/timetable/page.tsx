"use client";
import React, { useEffect, useState } from 'react';

type TimetableEntry = {
  day: string;
  subject: string;
  time: string;
};

const TimetablePage: React.FC = () => {
  const [timetable, setTimetable] = useState<TimetableEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTimetable = async () => {
      const res = await fetch('/api/timetable');
      const data: TimetableEntry[] = await res.json();
      setTimetable(data);
      setLoading(false);
    };
    fetchTimetable();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="p-6">
    <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">Timetable</h1>
    <table className="min-w-full bg-white border border-red-900 rounded-lg shadow-md">
        <thead>
            <tr className="bg-gray-200 text-gray-900 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">Day</th>
                <th className="py-3 px-6 text-left">Subject</th>
                <th className="py-3 px-6 text-left">Time</th>
            </tr>
        </thead>
        <tbody className="text-gray-800 text-sm font-light">
            {timetable.map((entry, index) => (
                <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                    <td className="py-3 px-6">{entry.day}</td>
                    <td className="py-3 px-6">{entry.subject}</td>
                    <td className="py-3 px-6">{entry.time}</td>
                </tr>
            ))}
        </tbody>
    </table>
</div>

  );
};

export default TimetablePage;