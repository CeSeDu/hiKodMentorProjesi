const randomUsers = [];

const payload = ['fe', 'vb', 'og'];


const getRandomValue = (length) => {
    return Math.floor(Math.random() * length);
};
const currentPayload = payload[getRandomValue(payload.length)]
const getRandomUser = () => {
    const mentorPayload = mentors[currentPayload]
    let user = mentorPayload[getRandomValue(mentorPayload.length)];
    if (randomUsers.length > 0) {
        while (true) {
            if (
                randomUsers[0].name === user.name &&
                randomUsers[0].surname === user.surname
            ) {
                user = mentorPayload[getRandomValue(mentorPayload.length)];
            } else {
                randomUsers.push(user);
                return false;
            }
        }
    } else {
        randomUsers.push(user);
        return getRandomUser();
    }
};
getRandomUser();

const img = document.querySelectorAll(".mentorImg > img");
const mentorName = document.querySelectorAll(".mentorInfo > h3");
const mentorSocialLinkedin = document.querySelectorAll(
    ".mentorContact > div:nth-child(2) > span"
);
const mentorSocialInstagram = document.querySelectorAll(
    ".mentorContact > div:nth-child(1) > span"
);
const mentorsLink = document.querySelector('#mentor-link').setAttribute('href', `../mentors/mentors.html?displayName=${currentPayload}`)
randomUsers.map((user, indx) => {
    if (`${user.img}`.length > 0) {
        img[indx].src = `/img/img-${user.name
    .toLocaleLowerCase()
    .turkishToEnglish()}.jpg`;
    } else {
        img[indx].src = "/img/img-nophoto.jpg"
    }
    mentorName[indx].innerHTML = `${user.name} ${user.surname}`;
    mentorSocialLinkedin[indx].innerHTML = `${user.name} ${user.surname}`;
    const userInstagram = user.socialMedia.find((socialMedia) => {
        const socialMediaName = Object.entries(socialMedia)[0];
        if (socialMediaName[0] === "instagram") {
            return socialMedia;
        }
    });
    if (userInstagram.instagram.length > 0) {
        mentorSocialInstagram[indx].innerHTML = userInstagram.instagram
            .replace("https://www.instagram.com/", "")
            .slice(0, -1);
    }
});