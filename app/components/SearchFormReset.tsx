'use client'

import React from 'react'
import Link from 'next/link'

export default function SearchFormReset() {
    const reset = () => {
        const form = document.querySelector('form') as HTMLFormElement;
        if (form) {
            form.reset();
        }
    }

    return (
        <button type="reset" onClick={reset}>
            <Link href="/" className='cursor-pointer text-white'>X</Link>
        </button>
    )
}
