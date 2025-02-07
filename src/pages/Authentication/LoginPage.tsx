import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, TextField, Typography, Tab, Tabs, Paper, Button } from '@mui/material';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

const LoginPage: React.FC = () => {
    const { t } = useTranslation();
    const [tabValue, setTabValue] = useState(0);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [smsCode, setSmsCode] = useState('');
    const [isCodeSent, setIsCodeSent] = useState(false);

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setTabValue(newValue);
    };

    const handlePhonePasswordLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Implement phone/password login logic here
        console.log('Login with phone and password', { phoneNumber, password });
    };

    const handleSendSmsCode = () => {
        // Implement SMS code sending logic here
        console.log('Sending SMS code to', phoneNumber);
        setIsCodeSent(true);
    };

    const handleSmsLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Implement SMS code login logic here
        console.log('Login with SMS code', { phoneNumber, smsCode });
    };

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
            }}
        >
            <Paper elevation={3} sx={{ padding: 4, width: '100%', maxWidth: 400 }}>
                {/* <Typography variant="h4" align="center" gutterBottom>
                    Login
                </Typography> */}
                <Tabs value={tabValue} onChange={handleTabChange} centered>
                    <Tab label={t("login_page.login_with_password")} />
                    <Tab label={t("login_page.login_with_sms")} />
                </Tabs>

                <TabPanel value={tabValue} index={0}>
                    <form onSubmit={handlePhonePasswordLogin}>
                        <TextField
                            fullWidth
                            label={t("general_inputs.phone_number")}
                            variant="outlined"
                            margin="normal"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                        <TextField
                            fullWidth
                            label={t("general_inputs.password")}
                            type="password"
                            variant="outlined"
                            margin="normal"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="error" // Use "error" for red background or define custom color via sx prop.
                            sx={{
                                backgroundColor: "#D74101",
                                color: "#FFFFFF",
                                mt: "20px", // Add some margin top if needed.
                            }}
                        >
                            {t("login_page.login_btn")}
                        </Button>
                    </form>
                </TabPanel>

                <TabPanel value={tabValue} index={1}>
                    <form onSubmit={handleSmsLogin}>
                        <TextField
                            fullWidth
                            label={t("general_inputs.phone_number")}
                            variant="outlined"
                            margin="normal"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                        {!isCodeSent ? (
                            <Button
                                onClick={handleSendSmsCode}
                                fullWidth
                                variant="contained"
                                color="error" // Use "error" for red background or define custom color via sx prop.
                                sx={{
                                    backgroundColor: "#D74101",
                                    color: "#FFFFFF",
                                    mt: "20px", // Add some margin top if needed.
                                }}
                            >
                                {t("login_page.send_sms")}
                            </Button>
                        ) : (
                            <>
                                <TextField
                                    fullWidth
                                    label={t("login_page.sms_code")}
                                    variant="outlined"
                                    margin="normal"
                                    value={smsCode}
                                    onChange={(e) => setSmsCode(e.target.value)}
                                />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="error" // Use "error" for red background or define custom color via sx prop.
                                    sx={{
                                        backgroundColor: "#D74101",
                                        color: "#FFFFFF",
                                        mt: "20px", // Add some margin top if needed.
                                    }}
                                >
                                    {t("login_page.login_btn")}
                                </Button>
                            </>
                        )}
                    </form>
                </TabPanel>
            </Paper>
        </Box>
    );
};

export default LoginPage;
