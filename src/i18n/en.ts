export const en = {
  meta: {
    home: {
      title: "memteg – a calmer place for your thoughts",
      description:
        "A Telegram bot that turns your voice notes, forwards and quick thoughts into a structured, searchable second brain.",
    },
    privacy: {
      title: "Privacy Policy – memteg",
      description:
        "How memteg handles your data, who we share it with, and how to delete everything.",
    },
    terms: {
      title: "Terms of Service – memteg",
      description: "Terms governing your use of memteg.",
    },
    contact: {
      title: "Contact – memteg",
      description: "Get in touch with the memteg team.",
    },
  },
  nav: {
    features: "Features",
    how: "How it works",
    privacy: "Privacy",
    contact: "Contact",
    cta: "Join the beta",
  },
  hero: {
    eyebrow: "A Telegram bot for thinking people",
    title: "Your thoughts, finally captured.",
    subtitle:
      'An idea hits – you catch it. A link surfaces – you save it. No laptop, no "I\'ll write it later", no switching.',
    ctaPrimary: "Join the beta",
    ctaSecondary: "How it works",
    badges: [],
  },
  quote: {
    text: '"Saved Messages" is where ideas go to die.',
    authors: [
      "everyone who scrolled through 300 messages to find one link",
      "everyone who sent themselves a voice note and never listened to it",
    ],
  },
  how: {
    eyebrow: "How it works",
    title: "Drop a thought. Find it when you need it.",
    steps: [
      {
        n: "01",
        title: "Send it as-is",
        body: "Text, voice note, or a repost. No formatting, no templates.",
      },
      {
        n: "02",
        title: "The bot structures it for you",
        body: "Transcribes voice, adds tags, links to related notes.",
      },
      {
        n: "03",
        title: "Find it when you need it",
        body: "Search by words or meaning. /ask — and the bot tells you what you thought before.",
      },
    ],
  },
  features: {
    eyebrow: "Features",
    title: "Sent at 11pm. Found it a month later.",
    items: {
      voice: {
        title: "Voice → text",
        body: "Recorded on the go — transcribed before you get home.",
      },
      tags: {
        title: "Tags without effort",
        body: "Each note gets relevant tags and a short slug, so you find it later without remembering the exact words.",
      },
      search: {
        title: "Search by meaning",
        body: "Don't remember the word — doesn't matter. Write something close, it'll find it.",
      },
      graph: {
        title: "Connections appear on their own",
        body: "The bot notices when you keep thinking about the same thing. And shows you what you wrote before.",
      },
      ask: {
        title: "/ask — your memory",
        body: "Like chatting with yourself, but with actual memory. Answer includes a link to the original note.",
      },
      erase: {
        title: "Deactivation wipes everything",
        body: "One tap — everything's gone. No forms, no waiting.",
      },
    },
  },
  whoFor: {
    eyebrow: "Who it's for",
    title: "For people who think on the go.",
    items: [
      {
        title: "You live in Telegram",
        body: "No point installing yet another app for every passing thought.",
      },
      {
        title: "Ideas come while moving",
        body: "When a thought hits, you're nowhere near a laptop. Telegram is already in your pocket.",
      },
      {
        title: "You want a deeper system",
        body: "Connect your Obsidian vault via git — all your notes end up there.",
      },
    ],
  },
  privacy: {
    eyebrow: "Privacy by design",
    title: "What we do with your notes.",
    items: [
      {
        title: "Text stored on our server only",
        body: "Notes are stored on our server. Text never leaves it.",
      },
      {
        title: "AI for processing only",
        body: "Voice is transcribed and not retained after processing. AI providers operate under their own policies.",
      },
      {
        title: "Audio stays in Telegram",
        body: "We store a file_id, not the file. Delete the message in Telegram – the audio is gone.",
      },
      {
        title: "Deactivation wipes everything",
        body: "No exit interview. Deactivate your account – your data is removed.",
      },
    ],
    cta: "Read the full policy",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Questions and answers.",
    items: [
      {
        q: "Is it free?",
        a: "During the beta – yes. Pricing will be modest and announced before any paid plan starts.",
      },
      {
        q: "Do you train AI on my notes?",
        a: "OpenAI and Anthropic have API terms that prohibit using customer data for training — but that's their policy, not our guarantee.",
      },
      {
        q: "How do I get an invite?",
        a: "Tap the invite button – it opens a chat with the operator on Telegram. We onboard in small batches.",
      },
      {
        q: "Can I export notes to Markdown?",
        a: "Planned.",
      },
      {
        q: "Can I sync with Obsidian?",
        a: "Planned — via git.",
      },
      {
        q: "How is this different from Notion?",
        a: "Notion is for when you have time. Memteg is for when you don't.",
      },
      {
        q: "What happens to voice notes?",
        a: "They're transcribed once and never stored on our side. The audio stays in your Telegram chat.",
      },
    ],
  },
  finalCta: {
    title: "How many good ideas have you already lost?",
    body: "The next one – you won't. memteg is in private beta.",
    cta: "Join the beta",
  },
  footer: {
    tagline: "A Telegram bot for thinking people.",
    nav: {
      product: "Product",
      legal: "Legal",
      home: "Home",
      privacy: "Privacy",
      terms: "Terms",
      contact: "Contact",
    },
    rights: "All rights reserved.",
  },
  langSwitch: { en: "EN", ru: "RU" },

  // mockup content
  mock: {
    voice: {
      label: "Voice note · 0:23",
      transcript:
        "noticed i open tiktok the moment i need to start something hard. open it even when there's nothing new there",
      tags: ["#procrastination", "#focus", "#dopamine"],
      slug: "tiktok-instead-of-work",
    },
    ask: {
      q: "what did i think about social media and work?",
      a: "You wrote that you open TikTok right before hard tasks — even when there's nothing new there.",
      cite: "note · tiktok-instead-of-work",
    },
    search: {
      q: "why i can't concentrate",
      result: "social media kills focus",
      hint: 'matched semantically – your note doesn\'t mention "concentrate".',
    },
    graph: ["tiktok", "procrastination", "focus", "hard tasks", "dopamine"],
  },

  privacyPage: {
    h1: "Privacy Policy",
    updated: "Last updated: 2026-05-18",
    intro:
      "memteg is a small startup in private beta. No legal boilerplate — just an honest explanation of how things work.",
    sections: [
      {
        h: "What we store",
        body: "Your Telegram user_id, username, and note contents (text and voice transcripts). We don't store audio files — only a reference to the original in Telegram and the transcript.",
      },
      {
        h: "Where it lives",
        body: "On a dedicated server in Germany (Hetzner). Nowhere else.",
      },
      {
        h: "What we use for AI",
        body: "OpenAI for voice transcription and search. Anthropic for tags, summaries, and /ask. They only receive what's needed for a specific request. Both have API terms stating that customer data isn't used for model training — but that's their policy, not our guarantee.",
      },
      {
        h: "Deletion",
        body: "Deactivate your account through the bot — everything is deleted. No forms, no waiting.",
      },
      {
        h: "Contact",
        body: "Questions about your data — through the Contact page. We'll get back to you.",
      },
    ],
  },
  termsPage: {
    h1: "Terms of Service",
    updated: "Last updated: 2026-05-08",
    intro:
      "By using memteg you agree to the terms below. They are deliberately short.",
    sections: [
      {
        h: "The service",
        body: "memteg is provided as-is, on a best-effort basis, with no uptime guarantee. The service is offered free during private beta.",
      },
      {
        h: "Acceptable use",
        body: "Don't use memteg to store or process content you do not have the right to. Don't attempt to abuse the service, scrape it, or interfere with other users.",
      },
      {
        h: "Account suspension",
        body: "We may suspend or block accounts that violate these terms or that put the service at risk. Where possible we will notify you first.",
      },
      {
        h: "Limitation of liability",
        body: "To the extent permitted by law, the operator is not liable for indirect or consequential damages arising from use of the service.",
      },
      {
        h: "Changes",
        body: "We may update these terms. Material changes will be announced inside the bot before they take effect.",
      },
      {
        h: "Governing law",
        body: "Disputes are governed by the law of the operator's jurisdiction, disclosed at launch.",
      },
    ],
  },
  contactPage: {
    h1: "Contact",
    intro:
      "memteg is built and operated by a small team. The fastest channel is the bot itself.",
    cta: {
      label: "Telegram",
      title: "Write to memteg in Telegram",
      body: "Invites, questions, bug reports, feedback and data requests go through the same chat.",
      action: "Open bot",
    },
  },
};

export type Dict = typeof en;
