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
};
export interface BoardState {
    clicked: {
        x: number;
        y: number;
    };
    empty: {
        x: number;
        y: number;
    };
    scaling: {
        width: number;
        height: number;
    };
    solved: boolean;
    tileSize: number;
    board: object;
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