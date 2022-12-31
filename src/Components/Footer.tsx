import { useMantineTheme, Container, Grid, Text } from '@mantine/core';

const Footer = () => {
    const theme = useMantineTheme();
    
    return (
        <footer style={{ backgroundColor: theme.colors.red[6]}}>

            <Container>
                <Grid justify="space-around">

                    <Grid.Col xs={12} sm={8} md={8} lg={8}>
                        <Text size="xl" weight={700} color="white" mb="10px">Simple Mantine template</Text>
                        <Text color="white" mb="5px">
                            aaaa
                        </Text>

                    </Grid.Col>

                </Grid>
            </Container>
        </footer>
    )
};

export default Footer;