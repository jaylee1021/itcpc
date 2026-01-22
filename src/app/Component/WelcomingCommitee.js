import Image from "next/image";

export default function WelcomingCommitee({ src, staffName, staffEngName, staffPosition, staffEmail }) {
    return (
        <div className='profile_section'>
            <Image src={src} className='pastor_image' alt='pastor' width={200} height={200} />
            <div className='profile_info'>
                <p>
                    <span className='staff_name'>
                        {staffName}
                    </span>
                    <br />
                    <span className='staff_eng_name'>
                        {staffEngName}
                    </span>
                    <br />
                    <span className='staff_position'>
                        {staffPosition}
                    </span>
                    <br />
                    <br />
                    <br />
                    <span>
                        {staffEmail}
                    </span>
                </p>
            </div>
        </div>
    );
}