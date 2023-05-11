const createMentorContainer = () => {
  const mentorsContainer = document.createElement("div");
  mentorsContainer.id = "mentorlerContainer";
  mentorsContainer.style.cssText =
    "justify-content: center; margin-bottom: 17px;";
  return mentorsContainer;
};

const createMentorCard = (socialMedias) => {
  /** Mentor Card div'in oluşturulması */
  const mentorCard = document.createElement("div");
  mentorCard.classList = "mentorCard";
  mentorCard.style.cssText = "width: 460px;";

  // Mentor Card isim bölümü
  const mentorCardHeader = document.createElement("a");
  mentorCardHeader.href = "%%mentor_link%%";

  const mentorCardImage = document.createElement("img");
  mentorCardImage.classList = "mentorImg";
  mentorCardImage.src = "%%mentor_img%%";
  mentorCardImage.alt = "";

  const mentorCardImageDiv = document.createElement("div");
  mentorCardImageDiv.classList = "mentorImg";
  mentorCardImageDiv.append(mentorCardImage);

  mentorCardHeader.append(mentorCardImageDiv);

  const mentorCardInfo = document.createElement("div");
  mentorCardInfo.classList = "mentorInfo";
  const mentorCardInfoName = document.createElement("h3");
  mentorCardInfoName.innerText = "%%mentor_name%%";
  mentorCardInfo.append(mentorCardInfoName);

  // Mentor Contact bölümü
  const mentorContact = document.createElement("div");
  mentorContact.classList = "mentorContact";
  const blankDiv = document.createElement("div");
  if (typeof socialMedias === "object" && socialMedias.length > 0) {
    socialMedias.map((socialMedia) => {
      const socialMediaInfo = Object.entries(socialMedia)[0];
      const aLink = document.createElement("a");
      aLink.href = `${socialMediaInfo[1]}`;
      aLink.style.cssText = "text-decoration: none; color: black;";

      const socialMediaIcon = document.createElement("i");
      socialMediaIcon.classList = `fa-brands fa-${socialMediaInfo[0]}`;

      const socialMediaName = document.createElement("span");
      socialMediaName.classList = "socialMediaName";
      socialMediaName.innerText = socialMedia.displayName;

      aLink.append(socialMediaIcon);
      aLink.appendChild(socialMediaName);

      blankDiv.append(aLink);
    });
  }

  mentorContact.append(blankDiv);
  mentorCardInfo.appendChild(mentorContact);

  mentorCardHeader.appendChild(mentorCardInfo);
  mentorCard.append(mentorCardHeader);
  return mentorCard;
};

const listMentors = () => {
  const localOrigin = window.location.origin;
  let indexValue = 1;

  let mainDiv;
  mentors.map((mentor, indx) => {
    if (indx === 0) {
      mainDiv = createMentorContainer();
    } else if (indx === mentors.length - 1) {
      document.querySelector("#mentorler").append(mainDiv);
    }

    let mentorCardContent = createMentorCard(mentor.socialMedia);

    mentorCardContent.innerHTML = mentorCardContent.innerHTML.replace(
      /%%mentor_link%%/g,
      `${localOrigin}/mentor/index.html?indx=${indx}`
    );
    mentorCardContent.innerHTML = mentorCardContent.innerHTML.replace(
      /%%mentor_img%%/g,
      `${localOrigin}/img/img-${mentor.name.toLowerCase()}.jpg`
    );
    mentorCardContent.innerHTML = mentorCardContent.innerHTML.replace(
      /%%mentor_name%%/g,
      `${mentor.name} ${mentor.surname}`
    );

    mainDiv.appendChild(mentorCardContent);

    if (indx === indexValue) {
      document.querySelector("#mentorler").append(mainDiv);
      indexValue = indexValue + 2;
      mainDiv = createMentorContainer();
    }
  });
};

listMentors();
