import React, { useState } from "react";

// List of 50 cool emojis
const emojis = [
    "😎", "🚀", "🎉", "🔥", "🌟", "🍕", "🎸", "🎮", "🎧", "📚",
    "🌈", "⚡", "👑", "🌊", "🍦", "🍩", "🍔", "🍪", "🥳", "🤖",
    "🦄", "🐉", "👾", "💎", "🚲", "🛸", "🛹", "🌌", "🦋", "🎢",
    "🎤", "🎬", "🧩", "🎲", "🧃", "🎈", "🎨", "🛶", "🏝️", "🏀",
    "🏓", "🏹", "🤹", "🧗", "🎯", "🧘", "🥋", "🚣", "🧍", "🛼"
];

export const getRandomEmoji = () => {
    const randomIndex = Math.floor(Math.random() * emojis.length);
    return emojis[randomIndex];
};

