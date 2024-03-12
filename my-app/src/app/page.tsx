"use client"

import Link from 'next/link'

export default function Main() {
    return (
        <div>
            <h1>Main site</h1>
            <Link href="/showCars"><button>ShowCars</button></Link>
        </div>
    );
}
