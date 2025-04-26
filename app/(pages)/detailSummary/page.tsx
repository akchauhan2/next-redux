'use client';
import { User } from '@/app/store/reducers/initialDetailsSlice';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/store'; // Assuming RootState is defined in the store

export default function Home() {
  const users: User[] = useSelector((s: RootState) => s.initialDetails.users);
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Link
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="/">
            Home
          </Link>
          {users.map((user) => (
            <h1 key={user.id} className="font-xl">
              {user.name}
            </h1>
          ))}
        </div>
      </main>
    </div>
  );
}
