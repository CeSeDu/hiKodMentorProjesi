const randomUsers = [];

const getRandomValue = () => {
  return Math.floor(Math.random() * mentors.length);
};
const getRandomUser = () => {
  let user = mentors[getRandomValue()];
  if (randomUsers.length > 0) {
    while (true) {
      if (
        randomUsers[0].name === user.name &&
        randomUsers[0].surname === user.surname
      ) {
        user = mentors[getRandomValue()];
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

randomUsers.map((user, indx) => {
  img[indx].src = `/img/img-${user.name
    .toLocaleLowerCase()
    .turkishToEnglish()}.jpg`;
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
