import React, { useEffect, useState } from "react";
import {
    Typography,
    Container,
    Grid,
    Card,
    CardContent,
    CardMedia,
    Box,
    Avatar,
    Button,
} from "@mui/material";
import { Navbar } from '../../components/organisms';
import img1 from '../../assets/images/img1.jpg';
import avatar from '../../assets/images/avatar.png';
import sponsor from '../../assets/images/oil.png';

const HomePage: React.FC = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    // Calculate days left until the Olympiad
    // useEffect(() => {
    //     const startDate = new Date("2025-02-10T00:00:00+0330");

    //     // Convert start date into milliseconds since Unix Epoch for consistency.
    //     const startDateInMs = startDate.getTime();

    //     const intervalId = setInterval(() => {
    //         const today = new Date();
    //         if (today > startDate) return clearInterval(intervalId);

    //         const diffTimeInMs = startDateInMs - today.getTime();
    //         let diffDays = Math.floor(diffTimeInMs / (1000 * 60 * 60 * 24));
    //         let remainingTimeInMs = diffTimeInMs % (1000 * 60 * 60 * 24);
    //         let diffHours = Math.floor(remainingTimeInMs / (1000 * 60 * 60));
    //         remainingTimeInMs %= (1000 * 60 * 60);
    //         let diffMinutes = Math.floor(remainingTimeInMs / (1000 * 60));
    //         remainingTimeInMs %= (1000 * 60);
    //         let diffSeconds = Math.ceil(remainingTimeInMs / (1000));

    //         setTimeLeft({
    //             days: diffDays < -1 ? 'Event Started' : String(diffDays),
    //             hours: String(diffHours).padStart(2, '0'),
    //             minutes: String(diffMinutes).padStart(2, '0'),
    //             seconds: String(diffSeconds).padStart(2, '0')
    //         });

    //     }, []);

    //     return () => clearInterval(intervalId); // Clear interval when component unmounts.

    // }, []); // Removed [startDate] since it doesn't change.

    // Sample data
    const reviews = [
        { id: 1, text: "An amazing experience!", author: "John Doe" },
        { id: 2, text: "Learned so much!", author: "Jane Smith" },
    ];

    const timeline = [
        { time: "09:00 AM", event: "Opening Ceremony" },
        { time: "10:00 AM", event: "Keynote Speech" },
    ];

    const staff = [
        { name: "Alice Johnson", role: "Event Coordinator", image: avatar },
        { name: "Bob Brown", role: "Technical Lead", image: avatar },
    ];

    const sponsors = [
        { name: "Company A", logo: sponsor },
        { name: "Company B", logo: sponsor },
    ];

    return (
        <div>
            {/* Header */}
            <Navbar />

            {/* Banner Section */}
            <Box sx={{ textAlign: "center", my: 4 }}>
                <img src={img1} alt="Banner Image" style={{ width: "100%", maxHeight: "500px" }} />
                <Typography variant="h4" sx={{ mt: 2 }}>
                    {timeLeft.days === 'Event Started' ?
                        (timeLeft.days) :
                        (`${timeLeft.hours}:${timeLeft.minutes}:${timeLeft.seconds}`)}
                    مانده به المپیاد
                </Typography>
            </Box>

            {/* Description and Reviews */}
            <Container sx={{ my: 4 }}>
                <Typography variant="h5" gutterBottom>Description</Typography>
                <Typography paragraph>
                    The Petroleum University Olympiad is an annual event that brings together students from various universities to showcase their skills and knowledge in petroleum engineering.
                </Typography>

                <Typography variant="h5" gutterBottom>Reviews</Typography>
                <Grid container spacing={2}>
                    {reviews.map((review) => (
                        <Grid item xs={12} sm={6} key={review.id}>
                            <Card>
                                <CardContent>
                                    <Typography>"{review.text}"</Typography>
                                    <Typography variant="subtitle2">- {review.author}</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            {/* Timeline */}
            <Container sx={{ my: 4 }}>
                <Typography variant="h5" gutterBottom>Timeline</Typography>
                {timeline.map((item, index) => (
                    <Box key={index} sx={{ mb: 2 }}>
                        <Typography variant="body1">
                            <strong>{item.time}</strong>: {item.event}
                        </Typography>
                    </Box>
                ))}
            </Container>

            {/* Staff Section */}
            <Container sx={{ my: 4 }}>
                <Typography variant="h5" gutterBottom>Staff</Typography>
                <Grid container spacing={2}>
                    {staff.map((member) => (
                        <Grid item xs={12} sm={6} md={4} key={member.name}>
                            <Card>
                                <CardMedia component="img" image={member.image} alt={member.name} />
                                <CardContent>
                                    <Typography variant="h6">{member.name}</Typography>
                                    <Typography variant="subtitle1">{member.role}</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            {/* Sponsors Section */}
            <Container sx={{ my: 4 }}>
                <Typography variant="h5" gutterBottom>Sponsors</Typography>
                <Grid container spacing={2}>
                    {sponsors.map((sponsor) => (
                        <Grid item xs={6} sm={3} key={sponsor.name}>
                            <Avatar src={sponsor.logo} alt={sponsor.name} sx={{ width: "100%", height: "auto" }} />
                        </Grid>
                    ))}
                </Grid>
            </Container>

            {/* Contact Information */}
            <Container sx={{ my: 4 }}>
                <Typography variant="h5" gutterBottom>Contact Information</Typography>
                <Typography>Email: contact@puolympiad.com</Typography>
                <Typography>Location: Petroleum University Campus, City Name</Typography>

                {/* Location Button */}
                <Button
                    variant="contained"
                    color="primary"
                    href="https://maps.google.com"
                    target="_blank"
                    sx={{ mt: 2 }}
                >
                    View Location on Map
                </Button>
            </Container>
        </div>
    );
};

export default HomePage;
