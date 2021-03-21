import Typography from "@material-ui/core/Typography";
import * as React from "react";
import { makeStyles, Theme } from "@material-ui/core";
import clsx from "clsx";

interface Props {
  className: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  internName: {
    fontWeight: "bold",
  },
  term: {
    marginTop: theme.spacing(6),
    marginLeft: theme.spacing(2),
    textDecoration: "underline",
  },
  list: {
    listStyle: "none",
    marginLeft: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
}));

const Home = ({ className }: Props) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)}>
      <Typography variant="h4">{"⛄️Experience⛄️"}</Typography>
      <image src="/public/yukidaruma-min.jpg" width="64" height="64" />
      <Typography variant="h5" className={classes.term}>
        {"⭐️Short Term Internship⭐️"}
      </Typography>
      <li className={classes.list}>
        <Typography align="center" className={classes.internName}>
          {"CA Tech Dojo"}
        </Typography>
        <Typography>{"期間： 2021年2月〜3月（3週間）"}</Typography>
        <Typography>{"技術：サーバーサイド（Go）"}</Typography>
      </li>
      <li className={classes.list}>
        <Typography align="center" className={classes.internName}>
          {"CA プロトスプリントリーグ"}
        </Typography>
        <Typography>{"期間： 2021年3月（3日間）"}</Typography>
        <Typography>{"技術：サーバーサイド（Go）"}</Typography>
      </li>
      <Typography variant="h5" className={classes.term}>
        {"⭐️Long Term Internship⭐️"}
      </Typography>
      <li className={classes.list}>
        <Typography align="center" className={classes.internName}>
          {"株式会社Gaudiy"}
        </Typography>
        <Typography align="center">{"期間： 2020年9月〜現在"}</Typography>
        <Typography align="center">
          {"技術：フロントエンド（React, TypeScript, Next.js, GraphQL, GCP）"}
        </Typography>
      </li>
    </div>
  );
};

export default Home;
