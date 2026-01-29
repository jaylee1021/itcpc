import Image from 'next/image';

export default function Ministry({ title, description, staff, time, image, position }) {
    if (position === 'right') {
        return (
            <section className='education_section'>
                <div className='education_section_description left'>
                    <p className='education_section_title'>
                        {title}
                    </p>
                    <p>
                        {description}
                    </p>
                    <p>
                        {staff}
                    </p>
                    <p>
                        {time}
                    </p>
                </div>
                <div>
                    <Image
                        src={image}
                        className='education_section_image right'
                        alt={title}
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto' }}
                    />
                </div>
            </section>
        );
    }
    return (
        <section className='education_section'>
            <div>
                <Image
                    src={image}
                    className='education_section_image left'
                    alt={title}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                />
            </div>
            <div className='education_section_description right'>
                <p className='education_section_title'>
                    {title}
                </p>
                <p>
                    {description}
                </p>
                <p>
                    {staff}
                </p>
                <p>
                    {time}
                </p>
            </div>
        </section>
    );
}