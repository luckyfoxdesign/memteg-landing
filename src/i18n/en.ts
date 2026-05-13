export const en = {
  meta: {
    home: {
      title: 'memteg — a calmer place for your thoughts',
      description:
        'A Telegram bot that turns your voice notes, forwards and quick thoughts into a structured, searchable second brain.',
    },
    privacy: {
      title: 'Privacy Policy — memteg',
      description: 'How memteg handles your data, who we share it with, and how to delete everything.',
    },
    terms: {
      title: 'Terms of Service — memteg',
      description: 'Terms governing your use of memteg.',
    },
    contact: {
      title: 'Contact — memteg',
      description: 'Get in touch with the memteg team.',
    },
  },
  nav: {
    features: 'Features',
    how: 'How it works',
    privacy: 'Privacy',
    contact: 'Contact',
    cta: 'Request invite',
  },
  hero: {
    eyebrow: 'A Telegram bot for thinking people',
    title: 'Your thoughts, finally captured.',
    subtitle:
      'Forward, type or speak — memteg structures your notes, links them, and lets you search what you actually meant.',
    ctaPrimary: 'Request invite',
    ctaSecondary: 'How it works',
    badges: ['Free during beta', 'Wipe everything with /delete_me', 'Lives inside Telegram'],
  },
  quote: {
    text: '"Saved Messages" is where ideas go to die.',
    author: 'every Telegram power-user, eventually',
  },
  how: {
    eyebrow: 'How it works',
    title: 'Three steps. No app to install.',
    steps: [
      {
        n: '01',
        title: 'Send anything',
        body: 'Type, dictate a voice note, or forward a message. memteg accepts all three — no formatting required.',
      },
      {
        n: '02',
        title: 'It gets structured',
        body: 'Voice transcribed, tags extracted, a slug generated, and links to related notes drawn — automatically.',
      },
      {
        n: '03',
        title: 'Search and ask',
        body: 'Full-text + semantic search. Use /ask to query your own notes in natural language.',
      },
    ],
  },
  features: {
    eyebrow: 'Features',
    title: 'Built for thoughts that need to survive the week.',
    items: {
      voice: {
        title: 'Voice → text, instantly',
        body: 'Voice notes are transcribed via Whisper. The original audio stays in Telegram — we keep only the transcript.',
      },
      tags: {
        title: 'Auto-tags & titles',
        body: 'Each note gets relevant tags and a short slug, so you find it later without remembering the exact words.',
      },
      search: {
        title: 'Semantic search',
        body: 'Search by meaning, not just keywords. Find that idea about "focus blocks" even if the note says "deep work".',
      },
      graph: {
        title: 'Linked notes',
        body: 'memteg draws connections between related thoughts so old ideas resurface when they become relevant again.',
      },
      ask: {
        title: '/ask your notes',
        body: 'Ask questions about everything you\'ve saved. Get an answer with citations to the original notes.',
      },
      erase: {
        title: '/delete_me — and it\'s gone',
        body: 'One command erases everything we know about you. No support tickets, no confirmation chains.',
      },
    },
  },
  whoFor: {
    eyebrow: 'Who it\'s for',
    title: 'Built for the way you already think.',
    items: [
      {
        title: 'Telegram-first people',
        body: 'You live in Telegram and don\'t want a separate app for every tiny thought.',
      },
      {
        title: 'Mobile thinkers',
        body: 'Most of your ideas show up on the phone, away from Obsidian or Notion.',
      },
      {
        title: 'Power users',
        body: 'Later, you\'ll be able to sync notes to your own Obsidian vault via git.',
      },
    ],
  },
  privacy: {
    eyebrow: 'Privacy by design',
    title: 'What we do with your notes.',
    items: [
      {
        title: 'Stored on a single VPS',
        body: 'No third-party hosting for your text. Region disclosed at launch.',
      },
      {
        title: 'OpenAI & Anthropic for processing',
        body: 'Whisper transcribes voice. Claude extracts tags and answers /ask. Nothing is used to train models.',
      },
      {
        title: 'Audio stays in Telegram',
        body: 'We store a file_id, not the file. Delete the message in Telegram — the audio is gone.',
      },
      {
        title: '/delete_me wipes everything',
        body: 'No exit interview. Run the command and your data is removed.',
      },
    ],
    cta: 'Read the full policy',
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Quick answers.',
    items: [
      {
        q: 'Is it free?',
        a: 'During the beta — yes. Pricing will be modest and announced before any paid plan starts.',
      },
      {
        q: 'Do you train AI on my notes?',
        a: 'No. We use OpenAI and Anthropic strictly for inference, with the no-training flags enabled.',
      },
      {
        q: 'How do I get an invite?',
        a: 'Tap the invite button — it opens a chat with the operator on Telegram. We onboard in small batches.',
      },
      {
        q: 'Can I export my notes?',
        a: 'Markdown export is on the roadmap. A direct Obsidian-via-git sync is planned for power users.',
      },
      {
        q: 'What happens to voice notes?',
        a: 'They\'re transcribed once and never stored on our side. The audio stays in your Telegram chat.',
      },
    ],
  },
  finalCta: {
    title: 'Stop losing your good ideas.',
    body: 'memteg is in private beta. Tap below and we\'ll send you an invite.',
    cta: 'Request invite',
  },
  footer: {
    tagline: 'A Telegram bot for thinking people.',
    nav: {
      product: 'Product',
      legal: 'Legal',
      home: 'Home',
      privacy: 'Privacy',
      terms: 'Terms',
      contact: 'Contact',
    },
    rights: 'All rights reserved.',
  },
  langSwitch: { en: 'EN', ru: 'RU' },

  // mockup content
  mock: {
    voice: {
      label: 'Voice note · 0:23',
      transcript:
        'Idea: the onboarding drops people right after the first empty state. We should preload one example note so the bot feels alive from message one.',
      tags: ['#product', '#onboarding', '#ideas'],
      slug: 'onboarding-empty-state-fix',
    },
    ask: {
      q: 'what did I think about that book on attention last month?',
      a: 'You wrote that "shallow attention" is the cost of always having Telegram open — and that the fix is structural, not willpower-based.',
      cite: 'note · stolen-focus-takeaways',
    },
    search: {
      q: 'idea about focus blocks',
      result: 'deep-work session log',
      hint: 'matched semantically — your note doesn\'t contain the word "focus".',
    },
    graph: ['onboarding', 'first-run feel', 'empty states', 'product polish', 'shallow attention'],
  },

  privacyPage: {
    h1: 'Privacy Policy',
    updated: 'Last updated: 2026-05-08',
    intro:
      'memteg is a Telegram bot that helps you organize your notes. This page explains what data we collect, where it goes, and how to delete it.',
    sections: [
      {
        h: 'What we collect',
        body: 'Your Telegram user_id and username, the contents of notes you send (text and voice), and message metadata (timestamps, message_id).',
      },
      {
        h: 'Where it lives',
        body: 'Notes are stored in a database on a VPS operated by us. The exact region is disclosed at launch. Disk-level encryption is provided by the hosting layer.',
      },
      {
        h: 'Third parties',
        body: 'OpenAI is used to transcribe voice notes (Whisper) and to compute embeddings for search. Anthropic\'s Claude is used to extract tags, generate summaries and answer /ask queries. Both are used as inference providers only — no training on your data.',
      },
      {
        h: 'Audio files',
        body: 'We do not store audio files. We keep a Telegram file_id and the resulting transcript. If you delete the original message in Telegram, the audio is no longer accessible — the transcript remains in your account.',
      },
      {
        h: 'Right to deletion',
        body: 'Run /delete_me inside the bot. All your notes, embeddings and metadata are removed from our database immediately.',
      },
      {
        h: 'Encryption',
        body: 'Database disks are encrypted at rest by the hosting provider. Note bodies are not encrypted at the application layer — bear this in mind for sensitive content.',
      },
      {
        h: 'Contact',
        body: 'For data requests, write to the bot from the Contact page.',
      },
    ],
  },
  termsPage: {
    h1: 'Terms of Service',
    updated: 'Last updated: 2026-05-08',
    intro:
      'By using memteg you agree to the terms below. They are deliberately short.',
    sections: [
      {
        h: 'The service',
        body: 'memteg is provided as-is, on a best-effort basis, with no uptime guarantee. The service is offered free during private beta.',
      },
      {
        h: 'Acceptable use',
        body: 'Don\'t use memteg to store or process content you do not have the right to. Don\'t attempt to abuse the service, scrape it, or interfere with other users.',
      },
      {
        h: 'Account suspension',
        body: 'We may suspend or block accounts that violate these terms or that put the service at risk. Where possible we will notify you first.',
      },
      {
        h: 'Limitation of liability',
        body: 'To the extent permitted by law, the operator is not liable for indirect or consequential damages arising from use of the service.',
      },
      {
        h: 'Changes',
        body: 'We may update these terms. Material changes will be announced inside the bot before they take effect.',
      },
      {
        h: 'Governing law',
        body: 'Disputes are governed by the law of the operator\'s jurisdiction, disclosed at launch.',
      },
    ],
  },
  contactPage: {
    h1: 'Contact',
    intro: 'memteg is built and operated by a small team. The fastest channel is the bot itself.',
    cta: {
      label: 'Telegram',
      title: 'Write to memteg in Telegram',
      body: 'Invites, questions, bug reports, feedback and data requests go through the same chat.',
      action: 'Open bot',
    },
  },
};

export type Dict = typeof en;
