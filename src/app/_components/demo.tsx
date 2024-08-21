const SpeakerCard = (props: Props) => {
    const image = props.speaker.files.length > 0 ? StorageUrl + props.speaker.files[0].filePath : UserImage;



    return (
        <Link href={/profile/${props.speaker._id}}>
            <div className={group relative hidden md:block}>
                <div className="relative ">
                    {/* <TestSVG className="h-auto w-full" /> */}
                    <SpeakerSvg className="h-auto w-full" />
                    <div className="image-container">
                        <Image
                            src={image}
                            alt="speaker"
                            fill
                            style={{
                                objectFit: 'cover',
                                objectPosition: 'center top',
                                clipPath: 'polygon(91% 97%, 91% 91%, 97% 91%, 97% 0%, 0% 0%, 0% 91%, 84% 91%, 91% 97%)',
                                WebkitClipPath:
                                    'polygon(91% 97%, 91% 91%, 97% 91%, 97% 0%, 0% 0%, 0% 91%, 84% 91%, 91% 97%)',
                            }}
                            className={h-full w-[100%] ${styles.grayscaleImage}}
                        />
                    </div>
                    <div
                        className="absolute  inset-0 flex items-end justify-center bg-gradient-to-t from-[#0E1E48F1] to-[#1F387A8F] opacity-0  transition-opacity group-hover:opacity-100"
                        style={{
                            clipPath: 'polygon(91% 97%, 91% 91%, 97% 91%, 97% 0%, 0% 0%, 0% 91%, 84% 91%, 91% 97%)',
                            WebkitClipPath:
                                'polygon(91% 97%, 91% 91%, 97% 91%, 97% 0%, 0% 0%, 0% 91%, 84% 91%, 91% 97%)',
                        }}
                    >
                        <div
                            className="mb-[15%] line-clamp-4 text-ellipsis px-[1.5rem] text-global-font-sub-text6 font-normal text-white "
                            dangerouslySetInnerHTML={{ __html: props.speaker.description || '' }}
                        ></div>
                    </div>
                </div>

                <div className="mt-[1.6rem] text-global-font-sm-headline5 font-semibold text-global-color-text-white md:text-global-font-headline5">
                    {props.speaker.firstName} {props.speaker.lastName}
                </div>

                <p className="pt-[0.5rem] text-global-font-sub-sm-text1 font-normal text-global-color-text-white md:text-global-font-sub-text1">
                    {props.speaker.affiliations}
                    {/* {lastAffiliation} */}
                </p>
            </div>

            {/* small-screen */}
            <div className={group relative block px-[1.25rem] md:hidden}>
                <div className="relative ">
                    <TestSVG className="h-auto w-full" />
                    <div className="image-container">
                        <Image
                            src={image}
                            alt="speaker"
                            fill
                            style={{
                                objectFit: 'cover',
                                objectPosition: 'center top',
                                clipPath: 'polygon(91% 97%, 91% 91%, 97% 91%, 97% 0%, 0% 0%, 0% 91%, 84% 91%, 91% 97%)',
                                WebkitClipPath:
                                    'polygon(91% 97%, 91% 91%, 97% 91%, 97% 0%, 0% 0%, 0% 91%, 84% 91%, 91% 97%)',
                            }}
                            className={h-full w-[100%] ${styles.grayscaleImage}}
                        />
                    </div>
                </div>

                <div className="px-[1.8rem] pt-[1.5rem] text-global-font-sm-headline5 font-semibold text-global-color-text-white md:text-global-font-headline5">
                    {props.speaker.firstName} {props.speaker.lastName}
                </div>

                <p className="px-[1.8rem]  pt-[0.5rem] text-global-font-sub-sm-text1 font-normal text-global-color-text-white md:text-global-font-sub-text1">
                    {props.speaker.affiliations}
                </p>

                <div
                    className="line-clamp-4 text-ellipsis px-[1.8rem] pt-[0.5rem] text-global-font-sub-sm-text1 font-normal text-global-color-text-white md:text-global-font-sub-text1"
                    dangerouslySetInnerHTML={{ __html: props.speaker.description || '' }}
                ></div>
            </div>
        </Link>
    );
};
