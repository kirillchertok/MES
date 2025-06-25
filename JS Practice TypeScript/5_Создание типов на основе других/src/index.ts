interface Collection<T> {
    add(item: T): void;
    remove(item: T): void;
    get(index: number): T | undefined;
    size(): number;
}

//

type InferType<T> = T extends true ? string : boolean;

//

type ValueOfKey<T, K extends keyof T> = T[K];
