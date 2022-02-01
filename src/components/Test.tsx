const color = "darkgreen";

export const Test: React.FC<React.HtmlHTMLAttributes<HTMLDivElement>> = props => (
  <div {...props} css={theme => ({ backgroundColor: color, color: theme.palette.secondary.main })}>
    This has a darkgreen background.
  </div>
);
