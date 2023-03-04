import { Button, Container, Overlay, createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  hero: {
    position: "relative",
    backgroundImage:
      "url(https://image.tmdb.org/t/p/original/hJoe1i1MXoO7sXkbQRuONvUNPEo.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },

  container: {
    height: "400px",
    display: "flex",
    width: '100%',
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingBottom: `calc(${theme.spacing.xl} * 6)`,
    zIndex: 1,
    position: "relative",

    [theme.fn.smallerThan("sm")]: {
      height: "500rem",
      paddingBottom: `calc(${theme.spacing.xl} * 3)`,
    },
  },
  control: {
    marginTop: `calc(${theme.spacing.xl} * 1.5)`,

    [theme.fn.smallerThan("sm")]: {
      width: "100%",
    },
  },
}));

export default function Hero() {
  const { classes } = useStyles();

  return (
    <div className={classes.hero}>
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
        opacity={1}
        zIndex={0}
      />
      <Container className={classes.container}>
      </Container>
    </div>
  );
}
