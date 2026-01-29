
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
                    <img src={image} className='education_section_image right' />
                </div>
            </section>
        );
    }
    return (
        <section className='education_section'>
            <div>
                <img src={image} className='education_section_image left' />
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