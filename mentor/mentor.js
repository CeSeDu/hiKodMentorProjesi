const urlVariable = window.location.search.replace("?", "").split("&");
const idx = urlVariable[0].split('=')
const displayName = urlVariable[1].split('=')
if (idx[0] !== "indx") {
    window.history.go(-1);
} else if (displayName[0] !== 'displayName' || !mentors[displayName[1]]) {
    window.history.go(-1);

} else {
    const fileName = [
        "css.svg",
        "git.png",
        "html.png",
        "instagram.svg",
        "js.png",
        "react.png",
        "vue.png",
        "csharp.png",
        "dotnet.png",
        "bootstrap.png",
        "python.jpg",
        "unity.png",
        "csharp.png",
        "angular.png",
        "vscode.png",
        "java.png",
        "cc.png",
        "lua.png",
        "cpp.png",
        "raylib.png",
        "playfab.png",
        "unreal.png",
        "aseprite.png",
        "audacity.png",
        "github.png",
        "camtasia.png",
        "blender.png",
        "adobe_premiere.png",
        "adobe_photoshop.png",
        "kotlin.png",
        "sql.png",
        "typescript.png"
    ];
    const indx = Number(idx[1]);

    const mentor = mentors[displayName[1]][indx];
    console.log(mentor)

    const section = document.querySelector("#person");

    /** article - start */
    const article = document.createElement("article");
    article.classList = "personcard";

    const personImg = document.createElement("img");
    personImg.classList = "personImg";
    if (`${mentor.img}`.length > 0) {
        personImg.src = `../img/img-${mentor.name
      .toLocaleLowerCase()
      .turkishToEnglish()}.jpg`;
    } else {
        personImg.src = `../img/img-nophoto.jpg`;
    }
    article.append(personImg);

    const personInfo = document.createElement("div");
    personInfo.classList = "flex personInfo";

    const personName = document.createElement("div");
    personName.classList = "flex personName";

    const personNameH = document.createElement("h1");
    personNameH.style.cssText = "margin: 0; font-size: 48px; color: #F78501;";
    personNameH.innerText = `${mentor.name} ${mentor.surname}`;
    personName.append(personNameH);

    const personTitle = document.createElement("h3");
    personTitle.classList = "personTitle"
    personTitle.style.cssText = "margin: 0; font-size: 24px; font-weight: 500";

    personName.appendChild(personTitle);

    personInfo.appendChild(personName);

    const personSocialMedia = document.createElement("div");
    personSocialMedia.classList = "flex personSocial";
    const socialMedias = mentor.socialMedia;
    if (typeof socialMedias === "object" && socialMedias.length > 0) {
        socialMedias.map((socialMedia) => {
            const socialMediaInfo = Object.entries(socialMedia)[0];
            const socialMediaLink = document.createElement("a");
            socialMediaLink.href = `${socialMediaInfo[1]}`;
            socialMediaLink.classList = "flex socialLink";

            const socialMediaIcon = document.createElement("i");
            socialMediaIcon.classList = `fa-brands fa-${socialMediaInfo[0]}`;
            socialMediaIcon.style.cssText = "font-size: 80px;";

            socialMediaLink.append(socialMediaIcon);
            personSocialMedia.appendChild(socialMediaLink);
        });
    }
    personInfo.appendChild(personSocialMedia);

    article.appendChild(personInfo);

    section.append(article);
    /** article - end */

    /** personExtraInfo - start */
    const personExtraInfo = document.createElement("div");
    personExtraInfo.classList = "flex personExtraInfo";

    const personSkill = document.createElement("div");
    personSkill.classList = "flex personSkill";

    const skills = mentor.exp;
    if (typeof skills === "object" && skills.length > 0) {
        skills.map((skill) => {
            const getFileName = fileName.find((name) => {
                return name.startsWith(skill);
            });
            const skillImg = document.createElement("img");
            skillImg.src = `../img/${getFileName}`;
            skillImg.style.cssText = "width: 30px;";
            personSkill.append(skillImg);
        });
    }

    personExtraInfo.append(personSkill);

    const personalInfos = [
        { name: "pets", dbName: "age" },
        { name: "school", dbName: "school" },
    ];

    personalInfos.map((info) => {
        const personalInfosDiv = document.createElement("div");
        personalInfosDiv.classList = "personalInfos";

        const personalInfosIcon = document.createElement("i");
        personalInfosIcon.classList = "material-icons";
        personalInfosIcon.innerText = info.name;
        personalInfosDiv.append(personalInfosIcon);

        const personalInfosSpan = document.createElement("span");
        personalInfosSpan.innerText = mentor[info.dbName];
        personalInfosDiv.appendChild(personalInfosSpan);

        personExtraInfo.appendChild(personalInfosDiv);
    });
    section.appendChild(personExtraInfo);

    const personDesc = document.createElement("div");
    personDesc.classList = "personDesc";
    personDesc.innerHTML = mentor.desc;
    section.appendChild(personDesc);

    /** personExtraInfo - end */

    if (`${mentor.video}`.length > 0) {
        const iframe = document.createElement("iframe");
        iframe.classList = "iframe";
        iframe.src = `${mentor.video}`;
        section.appendChild(iframe);
    } else {
        document.getElementById("person").style.height = "982px";
    }


    const writeDisplayname = (message) => {
        const displayHTML = document.querySelector(".personTitle");
        console.log(displayHTML);
        displayHTML.innerHTML = `Kodluyoruz Jr. Hi-Kod ${message} Mentoru`
    }

    switch (displayName[1]) {
        case "fe":
            writeDisplayname('Front End')
            break;

        case "vb":
            writeDisplayname('Veri Bilimi')
            break;

        case "og":
            writeDisplayname('Oyun Geliştirme')
            break;

        default:
            break;
    }
}