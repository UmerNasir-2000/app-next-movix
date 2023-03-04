import { Box, List, Image, createStyles, Anchor } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import Link from "next/link";

const useStyles = createStyles((theme) => ({
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: '10px',
    background: theme.colors.black[2],
  },
  list: {
    color: theme.colors.white.at(0),
    listStyleType: "none",
    display: "flex",
    justifyContent: "space-between",
    gap: "15px",
  },
  logo: {
    cursor: "pointer",
  }
}));

function Header() {

  const { classes } = useStyles();

  return (
    <Box component="nav" className={classes.navbar}>
      <Anchor component={Link} href="/" passHref>
        <Image radius="md" src="/movix-logo.svg" alt="logo" height={50} className={classes.logo}/>
      </Anchor>
      <List className={classes.list}>
        <List.Item>
          <Anchor component={Link} href="/" className="navlink" passHref>
            Movies
          </Anchor>
        </List.Item>
        <List.Item>
          <Anchor component={Link} href="/tv-shows" className="navlink" passHref>
            TV Shows
          </Anchor>
        </List.Item>
        <List.Item>
          <IconSearch size={20} className="navlink"/>
        </List.Item>
      </List>
    </Box>
  );

}

export default Header;
