import api from "../API"
import {SoundCloudApp} from "../types"

export class Apps {
    public constructor(private readonly api: api) {}

    public get = async () => {
        const response = await this.api.get(`/apps`)
        return response as Promise<SoundCloudApp[]>
    }
}
