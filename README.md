# menersar.github.io

<!-- asdasmdlmlkfasd TEST -->

<!-- https://menersar.github.io/ -->

<!-- <https://menersar.github.io/Things-And-Stuff> -->

## Scratch API

### URLs

Access URLs of the Scratch API to get:

- **USER** via `username`:

```console
`https://api.scratch.mit.edu/users/${username}/`
```

- **STUDIO** PAGE with offset via `studio id` and `offset`:

```console
`https://api.scratch.mit.edu/studios/${studioId}/projects?offset=${offset}&limit=40`
```

- **PROJECT THUMBNAIL** via `project id`:

```console
`https://uploads.scratch.mit.edu/projects/thumbnails/${projectId}.png`
```

- **USER AVATAR** via `user id`:

```console
`https://uploads.scratch.mit.edu/users/avatars/${userId}.png`
```

- **TEXT TRANSLATION** into **LANGUAGE** via specified `language` and passed `text` in `encodeURIComponent()`:

```console
`https://translate-service.scratch.mit.edu/translate?language=${language}&text=${encodeURIComponent(text)}`
```

- **TEXT TO SPEECH** (TTS) with **LOCALE** and **GENDER** via passed `locale` and `gender` as well as `text` in `encodeURIComponent()`:

```console
`https://synthesis-service.scratch.mit.edu/synth?locale=${locale}&gender=${gender}&text=${encodeURIComponent(text)}`
```

- **ASSET** via `md5ext` file name (consisting of an asset MD5 hash and an asset file extension):

```console
`https://assets.scratch.mit.edu/internalapi/asset/${md5ext}/get/`
```

### Visualization

![Visualization representation of the Scratch API (PNG)](assets/images/scratch-api-visualization.png)

### Sources

- <https://github.com/TurboWarp/trampoline>
- <https://github.com/TurboWarp/trampoline/blob/master/src/api.js>
- <https://scratch.mit.edu/discuss/topic/497809/>
- <https://scratch.mit.edu/discuss/topic/655936/>
- <https://en.scratch-wiki.info/wiki/Scratch_API>
- <https://de.scratch-wiki.info/wiki/Scratch_API>
