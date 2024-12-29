// <reference types="vinxi/types/client" />
import { hydrateRoot } from 'react-dom/client';
import { StartClient } from '@tanstack/start';
import { createRouter } from './router';

const router = createRouter();

// Client-side entry point after receiving the HTML from the server
hydrateRoot(document, <StartClient router={router} />);
