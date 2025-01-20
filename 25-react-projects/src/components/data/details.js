const end = "20 January 2025";
const time = 12;
export const doneProject = 5;
// Values to Update;
const start = "15 January 2025";
const startDate = new Date(start);
const endDate = new Date(end);
const total = Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24));
export const data = [
    {
        title: "Started",
        value: start
    }, {
        title: "Last Updated",
        value: end
    }, {
        title: doneProject >= 25 ? "Completed in" : "Ongoing",
        value: `${total} Days`
    }, {
        title: "Allocated Time",
        value: `${time} Hours`
    }, {
        title: "Progress",
        value: `${doneProject} / 25 Projects`
    }, {
        title: "Status",
        value: doneProject >= 25 ? "Completed!" : "Running . . ."
    }, {
        title: "Source",
        value: "Free Code Camp",
        link: "https://youtu.be/5ZdHfJVAY-s",
        linkTitle: "Youtube Video"
    }
];