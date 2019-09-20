export interface GameProps { };
export interface GameState {
    verified: boolean;
    level: number;
    complete: boolean
};

export interface BoardProps {
    image: {
        url: string;
    };
    onComplete: () => void;
};
export interface BoardState {
    clicked: {
        x: number;
        y: number;
    };
    emptyIndex: number;
    shuffling: boolean;
    scaling: {
        width: number;
        height: number;
    };
    solved: boolean;
    tileSize: number;
    board: { x: number; y: number }[];
    numVertTiles: number;
    numHorTiles: number;
    image: any;
};

export interface UsernameProps {
    onSubmit: () => void;
}
export interface UsernameState {
    username: string;
}

export interface GameStatsProps {
    title: string;
    body: string;
}