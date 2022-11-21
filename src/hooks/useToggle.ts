import { useCallback, useState } from "react";

function useToggle(
  initialState: boolean = false
): [boolean, () => void, () => void, () => void] {
  const [isPlaying, setIsPlaying] = useState(initialState);

  const play = useCallback(() => setIsPlaying(true), []);
  const pause = useCallback(() => setIsPlaying(false), []);
  const toggle = useCallback(() => setIsPlaying(!isPlaying), [isPlaying]);

  return [isPlaying, toggle, play, pause];
}

export default useToggle;
