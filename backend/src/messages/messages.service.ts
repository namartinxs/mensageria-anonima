import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class MessagesService {
  constructor(private prisma: PrismaService) { }
  async createRecipientLink(name: string) {

    const slug = crypto.randomUUID().slice(0, 8);
    return this.prisma.recipient.create({ data: { name, slug } })
  }

  async findRecipientBySlug(slug: string) {
    const recipient = await this.prisma.recipient.findUnique({ where: { slug } })
    if (!recipient) throw new NotFoundException('Link Inválido')
    return recipient
  }

  async saveMessage(recipientId: string, content: string) {
    return this.prisma.message.create({ data: { recipientId, content } });
  }

  async listMessages(recipientId: string) {
    return this.prisma.message.findMany({
      where: { recipientId },
      orderBy: { createdAt: 'desc' },
    });
  }

  async logBlockedAttempt(recipientId: string, reason: string) {
    return this.prisma.blockedAttempt.create({ data: { recipientId, reason } });
  }
}