import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

export interface ModerationResult {
    blocked: boolean;
    reason?: string;
}

@Injectable()
export class ModerationService {

    constructor(private config: ConfigService) { }
    async check(content: string): Promise<ModerationResult> {
        const apiKey = this.config.get<string>('OPENAI_API_KEY');
        const response = await fetch('https://api.openai.com/v1/moderations', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${apiKey}`,
            },
            body: JSON.stringify({ input: content })
        });

        const data = await response.json();
        const result = data.results[0];

        if (result.flagged) {
            const reason = Object.entries(result.categories)
                .find(([, flagged]) => flagged)?.[0] ?? 'conteúdo_ofensivo';

            return { blocked: true, reason };
        }

        return { blocked: false }
    }
}