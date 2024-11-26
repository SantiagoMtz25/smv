import React from "react";
import Image from "next/image";

export default function WaveImage() {
  return (
    <>
      <section className="profile-picture">
        <div className="image-border1"></div>
        <div className="image-border2"></div>
        <Image
          src="https://media.licdn.com/dms/image/v2/D4E03AQHtI700FkT4yA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1691343076811?e=1738195200&v=beta&t=HOtyW8FuEl4MoXUWlVNYEyGs11wcrS3l_ezDXPXrFts"
          alt="Santiago"
          width="192"
          height="192"
          quality="95"
          priority={true}
          className="h-24 w-24 ¿ rounded-full object-cover border-[0.35rem] border-white shadow-xl"
        />
      </section>
    </>
  );
}
