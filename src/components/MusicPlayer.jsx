
"use client";

import { useEffect, useRef, useState } from "react";

const tracks = [
  {
    title: "Song One",
    artist: "Artist One",
    src: "/music/music1.mp3",
  },
];

export default function MusicPlayer() {
  const [showConsent, setShowConsent] = useState(true);
  const audioRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  const currentTrack = tracks[currentIndex];

  // Listen for mobile navbar music button
  useEffect(() => {
    const openMobilePlayer = () => setIsOpen(true);

    window.addEventListener("openMusicPlayer", openMobilePlayer);

    return () => {
      window.removeEventListener("openMusicPlayer", openMobilePlayer);
    };
  }, []);

  const enableMusic = async () => {
    try {
      const audio = audioRef.current;
      if (!audio) return;

      audio.volume = volume;
      await audio.play();

      setIsPlaying(true);
      setShowConsent(false);
    } catch (error) {
      console.error("Music playback failed:", error);
    }
  };

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (error) {
        console.error("Playback error:", error);
      }
    }
  };

  const nextSong = () => {
    setCurrentIndex((prev) => (prev + 1) % tracks.length);
    setIsPlaying(true);
  };

  const previousSong = () => {
    setCurrentIndex((prev) => (prev - 1 + tracks.length) % tracks.length);
    setIsPlaying(true);
  };

  const seek = (e) => {
    if (!audioRef.current || !duration) return;
    const value = Number(e.target.value);
    audioRef.current.currentTime = value;
    setProgress(value);
  };

  const formatTime = (time) => {
    if (!Number.isFinite(time)) return "0:00";
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${mins}:${String(secs).padStart(2, "0")}`;
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={currentTrack.src}
        loop
        preload="auto"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onLoadedMetadata={(e) => setDuration(e.target.duration)}
        onTimeUpdate={(e) => setProgress(e.target.currentTime)}
        onEnded={nextSong}
      />

      {/* Music consent popup */}
      {showConsent && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-md p-5">
          <div className="w-full max-w-sm rounded-3xl border border-white/10 bg-[#111018] p-7 text-center text-white shadow-2xl">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-indigo-700 text-3xl">
              ♫
            </div>

            <p className="text-[10px] tracking-[3px] text-purple-300">
              WELCOME TO MY PORTFOLIO
            </p>

            <h2 className="mt-3 text-2xl font-semibold">
              A little music?
            </h2>

            <p className="mt-3 text-sm leading-6 text-gray-400">
              Enhance your experience with a little background music.
            </p>

            <button
              onClick={enableMusic}
              className="mt-7 w-full rounded-xl bg-gradient-to-r from-violet-500 to-indigo-600 py-3 font-semibold transition hover:scale-[1.02]"
            >
              ♫ Yes, play music
            </button>

            <button
              onClick={() => setShowConsent(false)}
              className="mt-4 text-sm text-gray-500 hover:text-white"
            >
              Maybe later
            </button>
          </div>
        </div>
      )}

      {/* Desktop floating player + Mobile navbar opened player */}
      <div
        className={`fixed bottom-[100px] right-3 sm:right-7 z-[999] ${
          isOpen ? "block" : "hidden md:block"
        }`}
      >
        {!isOpen ? (
          <button
            onClick={() => setIsOpen(true)}
            aria-label="Open music player"
            className="group relative flex items-center gap-3 rounded-full border border-white/10 bg-violet-800 backdrop-blur-2xl px-3 py-2.5 text-white shadow-[0_8px_40px_rgba(139,92,246,0.2)] hover:border-purple-400/50 hover:scale-105 transition-all duration-300"
          >
            <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-indigo-700">
              <span className="text-lg">♫</span>
              {isPlaying && (
                <span className="absolute inset-0 rounded-full border border-purple-300 animate-ping opacity-30" />
              )}
            </span>

            <span className="pr-2 text-left">
              <span className="block text-[9px] uppercase tracking-[2px] text-purple-300">
                Soundscape
              </span>
              <span className="text-xs font-medium">
                {isPlaying ? "Now playing" : "Listen to music"}
              </span>
            </span>

            <span className="mr-1 text-gray-400 group-hover:text-white">
              ↗
            </span>
          </button>
        ) : (
          <div className="relative w-[310px] max-w-[calc(100vw-24px)] overflow-hidden rounded-[26px] border border-white/10 bg-[#100F18]/95 text-white backdrop-blur-2xl shadow-[0_15px_70px_rgba(0,0,0,0.65)] animate-in fade-in slide-in-from-bottom-4 duration-300">
            <div className="absolute -top-24 -right-20 h-56 w-56 rounded-full bg-purple-600/20 blur-[80px] pointer-events-none" />

            <div className="relative p-5">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[3px] text-purple-300">
                    PERSONAL AUDIO
                  </p>
                  <p className="mt-1 text-xs text-gray-500">
                    YOUR LITTLE ESCAPE.
                  </p>
                </div>

                <button
                  onClick={() => setIsOpen(false)}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white transition"
                  aria-label="Close player"
                >
                  ×
                </button>
              </div>

              <div className="relative mb-5 flex h-[185px] items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#292044] via-[#171426] to-[#101019]">
                <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_50%_50%,#a78bfa,transparent_65%)]" />

                <div
                  className={`relative flex h-36 w-36 items-center justify-center rounded-full border border-white/10 bg-[#09090d] shadow-[0_0_40px_rgba(167,139,250,0.2)] ${
                    isPlaying ? "animate-[spin_8s_linear_infinite]" : ""
                  }`}
                >
                  <div className="absolute inset-2 rounded-full border border-white/10" />
                  <div className="absolute inset-5 rounded-full border border-white/10" />
                  <div className="absolute inset-8 rounded-full border border-white/10" />

                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-violet-400 to-indigo-700 text-white shadow-lg">
                    ♫
                  </div>
                </div>

                <div className="absolute bottom-3 left-3 text-[9px] uppercase tracking-[2px] text-white/50">
                  VOL. 01 / AUDIO
                </div>

                <div className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full border border-white/10 bg-black/30 px-2 py-1">
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      isPlaying ? "bg-green-400" : "bg-gray-500"
                    }`}
                  />
                  <span className="text-[9px] text-gray-300">
                    {isPlaying ? "LIVE" : "STANDBY"}
                  </span>
                </div>
              </div>

              <div className="mb-4 text-center">
                <h3 className="truncate text-lg font-semibold tracking-tight">
                  {currentTrack?.title || "Your Soundtrack"}
                </h3>
                <p className="mt-1 text-xs text-gray-500">
                  {currentTrack?.artist || "A little music, a little mood."}
                </p>
              </div>

              <div className="mb-4">
                <input
                  type="range"
                  min="0"
                  max={duration || 100}
                  value={Math.min(progress, duration || 100)}
                  onChange={seek}
                  className="h-1 w-full cursor-pointer accent-violet-400"
                  aria-label="Song progress"
                />

                <div className="mt-1 flex justify-between text-[10px] text-gray-500">
                  <span>{formatTime(progress)}</span>
                  <span>{formatTime(duration)}</span>
                </div>
              </div>

              <div className="mb-5 flex items-center justify-center gap-9">
                <button
                  onClick={previousSong}
                  className="text-xl text-gray-400 hover:text-white transition"
                  aria-label="Previous song"
                >
                  ↶
                </button>

                <button
                  onClick={togglePlay}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 text-white text-lg shadow-[0_0_25px_rgba(139,92,246,0.35)] hover:scale-110 transition"
                  aria-label={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying ? "Ⅱ" : "▶"}
                </button>

                <button
                  onClick={nextSong}
                  className="text-xl text-gray-400 hover:text-white transition"
                  aria-label="Next song"
                >
                  ↻
                </button>
              </div>

              <div className="flex items-center gap-3 border-t border-white/10 pt-4">
                <span className="text-sm text-gray-400">◖</span>

                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={volume}
                  onChange={(e) => {
                    const newVolume = Number(e.target.value);
                    setVolume(newVolume);
                    if (audioRef.current) {
                      audioRef.current.volume = newVolume;
                    }
                  }}
                  className="h-1 flex-1 cursor-pointer accent-violet-400"
                  aria-label="Volume"
                />

                <span className="w-8 text-right text-[10px] text-gray-500">
                  {Math.round(volume * 100)}%
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
