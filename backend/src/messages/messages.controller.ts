import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { MessagesService } from "./messages.service"; import { CreateMessageDto } from "./dto/create-message.dto";
import { ModerationService } from "../moderation/moderation.service";

@Controller('messages')
export class MessagesController {
    constructor(private messagesService: MessagesService, private moderationService: ModerationService) {

    }

    @Post('recipients')
    createRecipient(@Body('name') name: string) {
        return this.messagesService.createRecipientLink(name);
    }

    @Post(':slug')
    async sendMessage(@Param('slug') slug: string, @Body() dto: CreateMessageDto) {
        const recipient = await this.messagesService.findRecipientBySlug(slug)
        const moderation = await this.moderationService.check(dto.content)

        if (moderation.blocked) {
            await this.messagesService.logBlockedAttempt(recipient.id, moderation.reason!);

            return { status: 'blocked', message: 'Sua mensagem não pôde ser enviada.' }

            await this.messagesService.saveMessage(recipient.id, dto.content)
            return { status: 'sent' }
        }
    }

    @Get(':slug')
    listMessages(@Param('slug') slug: string) {
        return this.messagesService.listMessages(slug);
    }

}