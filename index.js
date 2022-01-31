#!/usr/bin/env node

Reset = "\x1b[0m"
Bright = "\x1b[1m"
Dim = "\x1b[2m"
Underscore = "\x1b[4m"
Blink = "\x1b[5m"
Reverse = "\x1b[7m"
Hidden = "\x1b[8m"

FgBlack = "\x1b[30m"
FgRed = "\x1b[31m"
FgGreen = "\x1b[32m"
FgYellow = "\x1b[33m"
FgBlue = "\x1b[34m"
FgMagenta = "\x1b[35m"
FgCyan = "\x1b[36m"
FgWhite = "\x1b[37m"

BgBlack = "\x1b[40m"
BgRed = "\x1b[41m"
BgGreen = "\x1b[42m"
BgYellow = "\x1b[43m"
BgBlue = "\x1b[44m"
BgMagenta = "\x1b[45m"
BgCyan = "\x1b[46m"
BgWhite = "\x1b[47m"

Title = `\n${Reset}${Underscore}${Bright}${FgWhite}`
Subtitle = `${Reset}${Bright}${FgMagenta}`
Text = `${Reset}${FgMagenta}`
Key = `${Reset}${FgWhite}`
Value = `${Reset}${FgMagenta}`
ListItem = `${Reset}${Bright}${FgWhite}    -`

// Clear screen
process.stdout.write("\u001b[2J\u001b[0;0H");

console.log(`\n`);
console.log(`${Title}ALIHAN KESKIN`)
console.log(`${Subtitle}Full Stack Developer @ Istanbul Metropolitan Municipality`)

console.log(`${Title}CONTACT`)
console.log(`\n`);
console.log(`${Key}Email: ${Value}akeskinw@gmail.com`)
console.log(`${Key}Phone: ${Value}+905384643518`)
console.log(`${Key}Linkedin: ${Value}https://www.linkedin.com/in/alihankeskin/`)

console.log(`${Title}EDUCATION`)
console.log(`\n`);
console.log(`${Subtitle}Geomatics Engineering`)
console.log(`${Subtitle}Istanbul Technical University`)


console.log(`${Title}LANGUAGES`)
console.log(`\n`);
console.log(`${Text}Turkish : Native`)
console.log(`${Text}English : Advanced` )

console.log(`${Title}EXPERIENCE`)

console.log(`\n`);
console.log(`${Subtitle}Istanbul Metropolitan Municipality`)
console.log(`${Subtitle}Full Stack Developer`)
console.log(`${Key}Date: ${Value}Oct 2021 - Present`)
console.log(`${Key}Job: ${Value}Developing GIS applications`)
console.log(`${Key}Responsinle for`);
console.log(`${ListItem}${Value} Developing GIS applications`);
console.log(`${Key}Developed my skills at:`)
console.log(`${ListItem}${Value} Javascript`);
console.log(`${ListItem}${Value} Webpack`);
console.log(`${ListItem}${Value} Esri Javascript`);


console.log(`\n`);
console.log(`${Subtitle}Bitay Türkiye`)
console.log(`${Subtitle}Full Stack Developer`)
console.log(`${Key}Date: ${Value}May 2021 - Sep 2021`)
console.log(`${Key}Job: ${Value}Developing customer support services`)
console.log(`${Key}Responsinle for`);
console.log(`${ListItem}${Value} Designing, developing and testing deployable customer support service.`);
console.log(`${ListItem}${Value} Designing, developing and testing deployable customer chat application.`);
console.log(`${ListItem}${Value} Designing, developing and testing control panel for customer support service.`);
console.log(`${Key}Developed my skills at:`)
console.log(`${ListItem}${Value} Javascript`);
console.log(`${ListItem}${Value} Node.js`);
console.log(`${ListItem}${Value} socket.io`);
console.log(`${ListItem}${Value} Redis`);
console.log(`${ListItem}${Value} MySql`);
console.log(`${ListItem}${Value} MongoDB`);
console.log(`${ListItem}${Value} Telegram API`);
console.log(`${ListItem}${Value} Webpack`);
console.log(`${ListItem}${Value} Project Development`);
console.log(`${ListItem}${Value} Responsive UI Design`);
console.log(`${ListItem}${Value} Linux`);
console.log(`${ListItem}${Value} Bash scripting`);
console.log(`${ListItem}${Value} Network Principles`);
console.log(`${ListItem}${Value} Sass`);

console.log(`\n`);
console.log(`${Subtitle}Vucos`)
console.log(`${Subtitle}Product Owner`)
console.log(`${Key}Date: ${Value}Nov 2020 - April 2021`)
console.log(`${Key}Job: ${Value}Managing Netflix like video platform`)
console.log(`${Key}Responsinle for`);
console.log(`${ListItem}${Value} Assisting our customers to design, test and deployment of TV related products and services`);
console.log(`${ListItem}${Value} Follow-up roadmap closely to assure launching new features on time. `);
console.log(`${ListItem}${Value} Organizing teams to assure our customers need is met.`);
console.log(`${ListItem}${Value} Mobile and Large Screen Hybrid TV product preparation.`);
console.log(`${ListItem}${Value} Knowledge about adaptive streaming technologies like HLS, HSS, MPEG-DASH etc.`);
console.log(`${Key}Developed my skills at:`)
console.log(`${ListItem}${Value} Product management`);
console.log(`${ListItem}${Value} Agile methodologies`);
console.log(`${ListItem}${Value} Team management`);
console.log(`${ListItem}${Value} Customer management`);
console.log(`${ListItem}${Value} Roadmap planning`);
console.log(`${ListItem}${Value} App launches`);
console.log(`${ListItem}${Value} App version documentation`);
console.log(`${ListItem}${Value} Business documentation`);
console.log(`${ListItem}${Value} Problem solving`);
console.log(`${ListItem}${Value} Communication`);

console.log(`\n`);
console.log(`${Subtitle}Vucos`)
console.log(`${Subtitle}Front-end Developer`)
console.log(`${Key}Date: ${Value}Nov 2019 - Nov 2020`)
console.log(`${Key}Job: ${Value}Developing Smart TV applications`)
console.log(`${Key}Responsinle for`);
console.log(`${ListItem}${Value} Developing Smart TV applications for Samsung and LG`);
console.log(`${ListItem}${Value} Deployment of these applications to store`);
console.log(`${ListItem}${Value} Troubleshooting problems related to these applications.`);
console.log(`${ListItem}${Value} Testing applications on all platforms.`);
console.log(`${Key}Developed my skills at:`)
console.log(`${ListItem}${Value} Javascript`);
console.log(`${ListItem}${Value} HTML`);
console.log(`${ListItem}${Value} CSS`);
console.log(`${ListItem}${Value} React`);
console.log(`${ListItem}${Value} Sass`);
console.log(`${ListItem}${Value} Webpack`);
console.log(`${ListItem}${Value} Chrome Cast`);
console.log(`${ListItem}${Value} Chrome Developer Tools`);
console.log(`${ListItem}${Value} Hls.js`);
console.log(`${ListItem}${Value} Video.js`);
console.log(`${ListItem}${Value} Streaming formats`);
console.log(`${ListItem}${Value} Bulma`);
console.log(`${ListItem}${Value} Tizen`);
console.log(`${ListItem}${Value} webOS`);
console.log(`${ListItem}${Value} Application Testing`);
console.log(`${ListItem}${Value} Documentation`);


console.log(`\n`)





console.log(`${Title}REFERENCES`)
console.log(`\n`);
console.log(`${Subtitle}Oğuz Serin, Odeon Software & Technology , Software Development Team Lead`)
console.log(`${Key}Mail: ${Value}oserin@gmail.com`);
console.log(`${Key}Linkedin: ${Value}https://www.linkedin.com/in/oguzserin/`);
console.log(`\n`)

console.log(`${Subtitle}Ozan Ertürk, Sensemore.io , CTO`)
console.log(`${Key}Mail: ${Value}ozanerturk17@gmail.com`);
console.log(`${Key}Linkedin: ${Value}https://www.linkedin.com/in/oerturk/`);
console.log(`\n`)

console.log(`${Subtitle}Berkay Oruç, Istanbul Metropolitan Municipality , GIS Developer`)
console.log(`${Key}Mail: ${Value}berkayoruc@gmail.com`);
console.log(`${Key}Linkedin: ${Value}https://www.linkedin.com/in/berkayoruc/`);
console.log(`\n`)

console.log(`${Subtitle}Ayhan Güneş, - , Network and System Administrator`)
console.log(`${Key}Mail: ${Value}ayhan.gunes@hotmail.com.tr`);
console.log(`${Key}Linkedin: ${Value}https://www.linkedin.com/in/ayhangunes/`);
console.log(`\n`)

console.log(`${Subtitle}Kurtman Çelik, Vucos , Software Developer`)
console.log(`${Key}Mail: ${Value}kurtman.celik@hotmail.com`);
console.log(`${Key}Linkedin: ${Value}https://www.linkedin.com/in/kurtmancelik/`);
console.log(`\n`)



console.log(`\n\n`)
