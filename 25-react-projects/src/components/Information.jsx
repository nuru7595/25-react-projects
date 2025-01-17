export default function Information() {
    return (
        <section className="info">
            <h2 className="title">Information</h2>
            <table className="table-fixed w-full font-bold text-lg">
                <tbody>
                    <tr>
                        <td>Started:</td>
                        <td>15 January 2025</td>
                    </tr>
                    <tr>
                        <td>Last Updated:</td>
                        <td>17 January 2025</td>
                    </tr>
                    <tr>
                        <td>Ongoing:</td>
                        <td>2 Days</td>
                    </tr>
                    <tr>
                        <td>Allocated Time:</td>
                        <td>4 Hours</td>
                    </tr>
                    <tr>
                        <td>Progress:</td>
                        <td>2 / 25 Projects</td>
                    </tr>
                    <tr>
                        <td>Status:</td>
                        <td>Running . . .</td>
                    </tr>
                    <tr>
                        <td>Source:</td>
                        <td><a href="https://youtu.be/5ZdHfJVAY-s" title="Youtube Video" target="_blank" className="underline tracking-wider">Free Code Camp</a></td>
                    </tr>
                </tbody>
            </table>
        </section>
    )
}