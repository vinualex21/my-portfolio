import Carousel from 'react-grid-carousel'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Chip } from '@mui/material';

const CustomCarousel = (props) => {
    return (
        <div className="carousel">
            <Carousel
                rows={1}
                cols={5}
                gap={15}
                showDots={false}
                dotColorActive="#ffd700"
                responsiveLayout={[
                    {
                        breakpoint: 1200,
                        cols: 3
                    },
                    {
                        breakpoint: 990,
                        cols: 2
                    }
                ]}
                mobileBreakpoint={600}>
                {
                    props.data.map((item, index) => (
                        <Carousel.Item key={index}>
                            <Card className='carousel-card'>
                                <a href={item.url} target='_blank' rel='noreferrer'>
                                    <CardContent className='carousel-card-content'>
                                        <div className='carousel-card-item'>
                                            <h3>{item.title}</h3>
                                            {item.date && <Chip label={item.date} className='carousel-date' />}
                                            {item.platform && <Chip label={item.platform} className='carousel-platform' />}
                                            {item.provider && <Chip label={item.provider} className='carousel-provider' />}
                                        </div>
                                    </CardContent>
                                </a>
                            </Card>
                        </Carousel.Item>
                    ))
                }
            </Carousel>
        </div>
    )
}

export default CustomCarousel;