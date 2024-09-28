export interface Sample {
    squadName:  string;
    homeTown:   string;
    formed:     number;
    secretBase: string;
    active:     boolean;
    members:    Member[];
}

export interface Member {
    name:           string;
    age:            number;
    secretIdentity: string;
    powers:         string[];
}