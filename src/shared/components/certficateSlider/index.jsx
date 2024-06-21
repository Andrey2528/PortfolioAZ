import certificateImg from '@/api/db/certificateImg';
import CustomSlider from '@/components/Slider';
import '@/styles/index.scss';

const CertificateSlider = () => {
    const sortedCertificate = certificateImg.sort(
        (a, b) => new Date(a.date) - new Date(b.date),
    );

    const certificateImgDB = sortedCertificate.map((item, index) => (
        <div key={index} className="slider__container-img">
            <img src={item.img} alt={item.title} className="slider__image" />
            <h6 className="card__title">{item.title}</h6>
        </div>
    ));

    return <CustomSlider certificateData={certificateImgDB} />;
};

export default CertificateSlider;
