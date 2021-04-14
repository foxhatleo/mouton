import Head from 'next/head'

const BUILDS = [
    ["04140", "d97ebc4"]
];

export default function Home() {
    return (
        <div className={"without-global"}>
            <Head>
                <title>Download Android builds for Panic Painter</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <h1>Panic Painter Android builds</h1>
                <ul>
                    <li><a href={`releases/panic-painter-android/${BUILDS[0][0]}.apk`}>Latest</a></li>
                    {BUILDS.map(label => <li><a href={`releases/panic-painter-android/${label[0]}.apk`}>
                        {label[0]} - Based on commit {label[1]} of master branch
                    </a></li>)}
                </ul>
            </main>
        </div>
    )
}
