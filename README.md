# Luxindo

## Attributes

- **Database**: postgres
- **Storage Adapter**: s3

### Installation Note
This project uses some packages that are still in beta, which may cause dependency conflicts during installation. To resolve this, please use the `--legacy-peer-deps` flag when installing dependencies:

```bash
npm install --legacy-peer-deps
```

Use version `3.0.0-beta.103` for payload plugins
```bash
npm install @payloadcms/storage-s3@3.0.0-beta.103 --legacy-peer-deps
```