import { Module } from "@nestjs/common";
import { MessagesController } from "./messages.controller";
import { MessagesService } from "./messages.service";
import { ModerationService } from "../moderation/moderation.service";


@Module({
    controllers: [MessagesController],
    providers: [MessagesService, ModerationService],
})

export class MessagesModule { }