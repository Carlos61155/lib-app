import { copyFile, mkdir, readdir } from 'node:fs/promises'
import path from 'node:path'

const generatedClientDir = path.resolve('electron/generated/prisma')
const electronBuildDir = path.resolve('dist-electron')
const engineFiles = (await readdir(generatedClientDir)).filter((file) =>
  /^libquery_engine-.*\.node$/.test(file),
)

const requiredLinuxEngines = [
  'libquery_engine-debian-openssl-1.1.x.so.node',
  'libquery_engine-debian-openssl-3.0.x.so.node',
]
const missingLinuxEngines = requiredLinuxEngines.filter((file) => !engineFiles.includes(file))

if (missingLinuxEngines.length > 0) {
  throw new Error(
    `Missing Prisma Linux engine(s): ${missingLinuxEngines.join(', ')}. Run prisma generate and check binaryTargets.`,
  )
}

if (engineFiles.length === 0) {
  throw new Error('No generated Prisma query engine found. Run prisma generate first.')
}

await mkdir(electronBuildDir, { recursive: true })
await Promise.all(
  engineFiles.map((file) =>
    copyFile(path.join(generatedClientDir, file), path.join(electronBuildDir, file)),
  ),
)
