/* eslint-disable @next/next/no-img-element */
export default function Title() {
  return (
    <div className="">
      <figure className="dark:hidden flex max-h-svh">
        <img
          alt="a planet with rings that say kittycats rule teh world forevah"
          className="w-full object-scale-down"
          src="/planetLight.webp"
        ></img>
      </figure>
      <figure className="hidden dark:flex max-h-svh">
        <img
          alt="a planet with rings that say kittycats rule teh world forevah"
          className=" w-full object-scale-down"
          src="/planetDark.webp"
        ></img>
      </figure>
    </div>
  );
}
