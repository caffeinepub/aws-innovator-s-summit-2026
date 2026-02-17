import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export type EventId = bigint;
export interface ProgrammeOverview {
    last_updated: string;
    events: Array<Event>;
}
export interface Event {
    id: EventId;
    title: string;
    description: string;
    end_time: string;
    start_time: string;
    location: string;
}
export interface backendInterface {
    addEvent(title: string, description: string, start_time: string, end_time: string, location: string): Promise<EventId>;
    deleteEvent(id: EventId): Promise<void>;
    getAllEvents(): Promise<Array<Event>>;
    getEvent(id: EventId): Promise<Event | null>;
    getProgrammeOverview(): Promise<ProgrammeOverview>;
    updateEvent(id: EventId, title: string, description: string, start_time: string, end_time: string, location: string): Promise<void>;
    updateProgrammeOverview(lastUpdateTime: string): Promise<void>;
}
