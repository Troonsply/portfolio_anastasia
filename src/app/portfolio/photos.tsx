import fs from 'fs'
import path from 'path'
import type { GetServerSideProps } from 'next'

export const getServerSideProps: GetServerSideProps = async () => {
    const photosDirectory = path.join(process.cwd(), 'public/photos')
    const filenames = fs.readdirSync(photosDirectory)

    const photos = filenames.map(name => ({
        src: `/photos/${name}`
    }))

    return {
        props: {
            photos,
        },
    }
}

