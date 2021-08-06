import { render, screen } from '@testing-library/react';
import JestReactExample from '@shared/jest-example/index'; // jest.config.js 에서 설정한 경로 별칭을 사용할 수 있다

describe('JestReactExample 페이지는', () => {
  it('heading 요소를 render 해야만 한다 ', () => {
    render(<JestReactExample />);

    const heading = screen.getByText(
      /Testing Next.js With Jest and React Testing Library/i
    );

    expect(heading).toBeInTheDocument();
  });
});
