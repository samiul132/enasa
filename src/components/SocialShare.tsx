import { Share2, Linkedin, Twitter, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface SocialShareProps {
  title: string;
  url?: string;
}

const SocialShare = ({ title, url = window.location.href }: SocialShareProps) => {
  const encodedTitle = encodeURIComponent(title);

  // Build a LinkedIn-friendly share URL that points to a static OG page when sharing blog posts
  const buildLinkedInShareUrl = (shareUrl: string) => {
    try {
      const parsed = new URL(shareUrl);
      const match = parsed.pathname.match(/^\/blog\/([^/?#]+)/);
      const shareTarget = match ? `${parsed.origin}/og-pages/${match[1]}.html` : shareUrl;
      return `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareTarget)}`;
    } catch {
      return `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
    }
  };

  const encodedUrl = encodeURIComponent(url);
  const shareLinks = {
    linkedin: buildLinkedInShareUrl(url),
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    email: `mailto:?subject=${encodedTitle}&body=Check out this article: ${encodedUrl}`
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      toast.success("Link copied to clipboard!");
    } catch (err) {
      toast.error("Failed to copy link");
    }
  };

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-muted-foreground font-medium">Share:</span>
      <Button
        variant="outline"
        size="sm"
        onClick={() => window.open(shareLinks.linkedin, '_blank')}
        className="hover:bg-[#0077B5] hover:text-white hover:border-[#0077B5] transition-colors"
      >
        <Linkedin className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() => window.open(shareLinks.twitter, '_blank')}
        className="hover:bg-[#1DA1F2] hover:text-white hover:border-[#1DA1F2] transition-colors"
      >
        <Twitter className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() => window.location.href = shareLinks.email}
        className="hover:bg-primary hover:text-primary-foreground transition-colors"
      >
        <Mail className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={copyToClipboard}
        className="hover:bg-primary hover:text-primary-foreground transition-colors"
      >
        <Share2 className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default SocialShare;