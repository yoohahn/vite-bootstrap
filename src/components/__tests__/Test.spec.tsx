import { render } from "@local-test-util";
import { Test } from "../Test";

describe("<Test />", () => {
  test("Should render <Test />", () => {
    const { getByTestId, getByText } = render(<Test data-testid="fubar" />);
    expect(getByTestId("fubar")).toBeInTheDocument();
    expect(getByText(/This has a darkgreen background/gi)).toBeInTheDocument();
  });
});
