/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            dropShadow: {
                top1px: '0 1px 2px'
            }
        }
    },
    plugins: []
}
